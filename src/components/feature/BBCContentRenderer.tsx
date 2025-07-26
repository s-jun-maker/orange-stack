"use client";

import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "../../../mdx-components";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface BBCContentRendererProps {
  title: string;
  content: string | null;
  audioUrl: string | null;
}

export default function BBCContentRenderer({ title, content, audioUrl }: BBCContentRendererProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-8">
            {title}
          </h1>
          
          {audioUrl && (
            <div className="mb-8 bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <AudioPlayer
                    src={audioUrl}
                    onPlay={() => console.log("Audio started")}
                    className="minimal-audio-player"
                    customProgressBarSection={[]}
                    customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
                    customAdditionalControls={[]}
                    customVolumeControls={[]}
                    showJumpControls={false}
                    showSkipControls={false}
                    showDownloadProgress={false}
                    showFilledProgress={false}
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-foreground">🎧 Listen to Audio</h3>
                  <p className="text-sm text-muted-foreground mt-1">Click play to start listening</p>
                </div>
              </div>
            </div>
          )}
          
          {content && (
            <div className="prose prose-lg max-w-none">
              <MDXRemote 
                source={content} 
                components={{
                  ...useMDXComponents({}),
                  h1: () => null, // Remove h1 tags from content
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}