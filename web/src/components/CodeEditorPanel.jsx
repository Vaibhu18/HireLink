import Editor from "@monaco-editor/react"
import { Loader2Icon, PlayIcon } from "lucide-react"
import { LANGUAGE_CONFIG } from "../data/problems"

const CodeEditorPanel = ({ selectedLanguage, code, isRunning, onLanguageChange, onCodeChange, onRunCode }) => {
  return (
    <div className="h-full bg-base-300 flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 bg-base-100 border-t border-base-300">
        <div className="flex items-center gap-3">
          <img
            src={LANGUAGE_CONFIG[selectedLanguage].icon}
            alt={LANGUAGE_CONFIG[selectedLanguage].name}
            className="size-6"
          />
          <select
            className="select select-sm outline-none"
            value={selectedLanguage}
            onChange={onLanguageChange}
          >
            {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
              <option key={key} value={key}>{lang.name}</option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary btn-sm gap-2" disabled={isRunning} onClick={onRunCode}>
          {isRunning ? (
            <>
              <Loader2Icon className="size-4 animate-spin" />
              Running...
            </>
          ) : (
            <>
              <PlayIcon className="size-4" />
              Run Code
            </>
          )}
        </button>
      </div>

      <div className="flex-1">
        <Editor
          height={"100%"}
          language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
          value={code}
          onChange={onCodeChange}
          theme="vcode-dark"
          beforeMount={(monaco) => {
            monaco.editor.defineTheme("vcode-dark", {
              base: "vs-dark",
              inherit: true,
              rules: [
                { token: "comment", foreground: "6A9955", fontStyle: "italic" },
                { token: "keyword", foreground: "C586C0" },
                { token: "number", foreground: "B5CEA8" },
                { token: "string", foreground: "CE9178" },
                { token: "function", foreground: "DCDCAA" },
                { token: "variable", foreground: "9CDCFE" },
              ],
              colors: {
                "editor.background": "#16181c", // slate-900
                "editor.foreground": "#e5e7eb",
                "editorLineNumber.foreground": "#475569",
                "editorLineNumber.activeForeground": "#38bdf8",
                "editorCursor.foreground": "#38bdf8",
                "editor.selectionBackground": "#1e293b",
                "editor.inactiveSelectionBackground": "#1e293b",
                "editorIndentGuide.background": "#334155",
                "editorIndentGuide.activeBackground": "#38bdf8",
              },
            });
          }}
          options={{
            fontSize: 14,
            lineNumbers: "on",
            lineHeight: 1.6,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            minimap: { enabled: false },
            fontFamily: "'JetBrains Mono', monospace"
          }}
        />
      </div>
    </div>
  )
}

export default CodeEditorPanel