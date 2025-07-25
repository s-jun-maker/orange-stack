import { readdir } from "fs/promises";
import path from "path";

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

export async function getEnglishs(): Promise<Post[]> {
  try {
    const englishsDirectory = path.join(
      process.cwd(),
      "src",
      "app",
      "englishs"
    );
    const entries = await readdir(englishsDirectory, { withFileTypes: true });

    const englishFolders = entries
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    return englishFolders.map((folder) => ({
      slug: folder,
      title:
        folder.charAt(0).toUpperCase() + folder.slice(1).replace(/-/g, " "),
      path: `/englishs/${folder}`,
    }));
  } catch {
    return [];
  }
}
