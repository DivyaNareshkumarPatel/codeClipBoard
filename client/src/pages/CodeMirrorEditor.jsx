import React, { useState, useRef, useEffect } from 'react';
import AceEditor from 'react-ace';
import { FaPen, FaSave, FaCopy, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

// Import Ace Editor modes and themes
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools'; // For autocompletion
import 'ace-builds/src-noconflict/ext-error_marker'; // For error markers

const defaultHtml = '<h1>Hello World!</h1>';
const defaultCss = 'h1 { color: red; }';
const defaultJs = 'console.log("JavaScript loaded");';

const CodeMirrorEditor = () => {
  const [html, setHtml] = useState(defaultHtml);
  const [css, setCss] = useState(defaultCss);
  const [js, setJs] = useState(defaultJs);
  const [title, setTitle] = useState('Untitled');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [copySuccess, setCopySuccess] = useState({ html: false, css: false, js: false });
  const iframeRef = useRef(null);

  // Static username for demonstration; replace with dynamic value if needed
  const username = 'Anonymous user';

  const handleHtmlChange = (value) => setHtml(value);
  const handleCssChange = (value) => setCss(value);
  const handleJsChange = (value) => setJs(value);
  const handleTitleChange = (e) => setNewTitle(e.target.value);
  const handleSaveTitle = () => {
    setTitle(newTitle);
    setIsEditingTitle(false);
  };

  const handleEditTitle = () => {
    setIsEditingTitle(true);
  };

  const runCode = () => {
    const iframe = iframeRef.current;
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
      </html>
    `);
    doc.close();
  };

  const resetCode = () => {
    setHtml(defaultHtml);
    setCss(defaultCss);
    setJs(defaultJs);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess((prevState) => ({ ...prevState, [type]: true }));
      setTimeout(() => {
        setCopySuccess((prevState) => ({ ...prevState, [type]: false }));
      }, 2000);
    }, (err) => {
      console.error('Failed to copy code: ', err);
    });
  };

  useEffect(() => {
    window.ace.config.set('workerPath', '/static/js/');
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.titleSection}>
          <div style={styles.titleWrapper}>
            {isEditingTitle ? (
              <input
                type="text"
                value={newTitle}
                onChange={handleTitleChange}
                onBlur={handleSaveTitle}
                style={styles.titleInput}
                autoFocus
              />
            ) : (
              <>
                <span style={styles.title}>{title}</span>
                <FaPen
                  onClick={handleEditTitle}
                  style={styles.editIcon}
                />
              </>
            )}
          </div>
          <span style={styles.username}>Welcome, {username}</span>
        </div>
        <div style={styles.buttonContainer}>
          <button onClick={runCode} style={styles.runButton}>Run Code</button>
          <button onClick={resetCode} style={styles.resetButton}>Reset</button>
          <button style={styles.saveButton}><FaSave /> Save</button>
        </div>
      </div>
      <div style={styles.editorWrapper}>
        <div style={styles.editorPanel}>
          <div style={styles.panelHeader}>
            <FaHtml5 style={styles.icon} /> HTML
            <div style={styles.copyContainer}>
              {copySuccess.html ? (
                <span style={styles.copiedText}>Copied</span>
              ) : (
                <FaCopy
                  onClick={() => copyToClipboard(html, 'html')}
                  style={styles.copyIcon}
                />
              )}
            </div>
          </div>
          <AceEditor
            mode="html"
            theme="monokai"
            name="html_editor"
            editorProps={{ $blockScrolling: true }}
            height="calc(100% - 40px)" // Adjust height for header
            width="100%"
            value={html}
            onChange={handleHtmlChange}
            style={styles.editor}
          />
        </div>
        <div style={styles.editorPanel}>
          <div style={styles.panelHeader}>
            <FaCss3Alt style={styles.icon} /> CSS
            <div style={styles.copyContainer}>
              {copySuccess.css ? (
                <span style={styles.copiedText}>Copied</span>
              ) : (
                <FaCopy
                  onClick={() => copyToClipboard(css, 'css')}
                  style={styles.copyIcon}
                />
              )}
            </div>
          </div>
          <AceEditor
            mode="css"
            theme="monokai"
            name="css_editor"
            editorProps={{ $blockScrolling: true }}
            height="calc(100% - 40px)" // Adjust height for header
            width="100%"
            value={css}
            onChange={handleCssChange}
            style={styles.editor}
          />
        </div>
        <div style={styles.editorPanel}>
          <div style={styles.panelHeader}>
            <FaJsSquare style={styles.icon} /> JavaScript
            <div style={styles.copyContainer}>
              {copySuccess.js ? (
                <span style={styles.copiedText}>Copied</span>
              ) : (
                <FaCopy
                  onClick={() => copyToClipboard(js, 'js')}
                  style={styles.copyIcon}
                />
              )}
            </div>
          </div>
          <AceEditor
            mode="javascript"
            theme="monokai"
            name="js_editor"
            editorProps={{ $blockScrolling: true }}
            height="calc(100% - 40px)" // Adjust height for header
            width="100%"
            value={js}
            onChange={handleJsChange}
            style={styles.editor}
          />
        </div>
      </div>
      <div style={styles.previewContainer}>
        <div style={styles.panelHeader}>Preview</div>
        <iframe
          title="preview"
          ref={iframeRef}
          style={styles.iframe}
        />
      </div>
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#1e1e1e', // Dark background for professional look
    color: '#e0e0e0', // Light text color
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '10px',
    borderBottom: '2px solid #333',
    backgroundColor: '#2d2d2d', // Darker background for header
    borderRadius: '8px',
  },
  titleSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  titleInput: {
    fontSize: '24px',
    color: '#e0e0e0',
    backgroundColor: '#333',
    border: '1px solid #444',
    borderRadius: '4px',
    padding: '5px 10px',
    outline: 'none',
    marginRight: '10px',
  },
  title: {
    fontSize: '24px',
    color: '#e0e0e0',
    marginRight: '10px',
  },
  editIcon: {
    cursor: 'pointer',
    color: '#e0e0e0', // Light color for pen icon to contrast with black background
    fontSize: '20px', // Slightly smaller font size
  },
  username: {
    fontSize: '14px',
    color: '#e0e0e0',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  runButton: {
    backgroundColor: '#34A853',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    marginRight: '10px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  resetButton: {
    backgroundColor: '#EA4335',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    marginRight: '10px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  saveButton: {
    backgroundColor: '#4200FF',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  editorWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  editorPanel: {
    flex: 1,
    marginRight: '10px',
    backgroundColor: '#2d2d2d',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  panelHeader: {
    backgroundColor: '#333',
    color: '#e0e0e0',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: '20px',
    marginRight: '10px',
  },
  copyContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  copyIcon: {
    color: '#e0e0e0', // Light color for copy icon to contrast with black background
    fontSize: '20px',
    cursor: 'pointer',
  },
  copiedText: {
    color: '#34A853', // Green color for 'Copied' text
    fontSize: '14px',
    marginLeft: '5px',
  },
  editor: {
    border: 'none',
  },
  previewContainer: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #333',
    backgroundColor: '#2d2d2d',
    borderRadius: '8px',
    height: '50%',
  },
  iframe: {
    width: '100%',
    height: '88%',
    border: 'none',
    backgroundColor:"white"
  },
};

export default CodeMirrorEditor;
