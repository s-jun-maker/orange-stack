"use server";
import { readdir } from "fs/promises";
import path from "path";
import { bbcContentTable, db } from "@/db";

export interface Post {
  slug: string;
  title: string;
  path: string;
}

export async function getPosts(): Promise<Post[]> {
  try {
    const postsDirectory = path.join(process.cwd(), "src", "app", "posts");
    const entries = await readdir(postsDirectory, { withFileTypes: true });

    const postFolders = entries
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    return postFolders.map((folder) => ({
      slug: folder,
      title:
        folder.charAt(0).toUpperCase() + folder.slice(1).replace(/-/g, " "),
      path: `/posts/${folder}`,
    }));
  } catch {
    return [];
  }
}

export interface BBCItem {
  id: number;
  title: string;
}

export interface BBCListResult {
  items: BBCItem[];
  totalCount: number;
  hasMore: boolean;
}

export async function getBBCList(
  page: number = 1,
  limit: number = 8
): Promise<BBCListResult> {
  try {
    const offset = (page - 1) * limit;

    const [items, totalCountResult] = await Promise.all([
      db
        .select({
          id: bbcContentTable.id,
          title: bbcContentTable.title,
        })
        .from(bbcContentTable)
        .limit(limit)
        .offset(offset),

      db.select({ count: bbcContentTable.id }).from(bbcContentTable),
    ]);

    const totalCount = totalCountResult.length;
    const hasMore = offset + items.length < totalCount;

    return {
      items,
      totalCount,
      hasMore,
    };
  } catch {
    return {
      items: [],
      totalCount: 0,
      hasMore: false,
    };
  }
}
