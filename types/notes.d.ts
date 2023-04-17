interface Notes {}

interface NotesConstructor {
  /* Notebook Functions */

  /**
   * Add a new notebook tab. If it failed to create a new tab, a -1 is returned instead. Indexes for notebook tabs begin at 0.
   *
   * @param {AddNotebookTabParameters} parameters A Table containing spawning parameters.
   * @returns {number} The index of the new tab.
   */
  addNotebookTab: (this: void, parameters: AddNotebookTabParameters) => number;

  /**
   * Edit an existing Tab in the notebook. Indexes for notebook tabs begin at 0.
   *
   * @param {EditNotebookTabParameters} parameters A Table containing spawning parameters.
   * @returns {boolean} True if the tab was edited, false otherwise.
   */
  editNotebookTab: (this: void, parameters: EditNotebookTabParameters) => boolean;

  /**
   * Returns a Table containing data on all tabs in the notebook. Indexes for notebook tabs begin at 0.
   *
   * @returns {Table} Table containing data on all tabs in the notebook.
   */
  getNotebookTabs: (this: void) => Required<EditNotebookTabParameters>[];

  /**
   * Remove a notebook tab. Notebook tab indexes begin at 0.
   *
   * @param {number} index The index of the tab to remove.
   * @returns {boolean} True if the tab was removed, false otherwise.
   */
  removeNotebookTab: (this: void, index: number) => boolean;

  /* Notes Functions */

  /**
   * Returns the contents of the on-screen notes section.
   *
   * @return {string} The contents of the on-screen notes section.
   */
  getNotes: (this: void) => string;

  /**
   * Replace the text in the notes window with the string. The notes is an area which displays text in the lower-right corner of the screen.
   *
   * @param {string} notes The new text for the notes window.
   */
  setNotes: (this: void, notes: string) => boolean;
}

/**
 * Notes, a static global class, allows access to the on-screen notes and the notebook.
 *
 * Example function call: Notes.setNotes()
 */
declare var Notes: NotesConstructor;

type CommonNotebookTabParameters = {
  /**
   * Text to place into the body of the new tab. Defaults to "".
   */
  body?: string;

  /**
   * Player Color for the new tab's color. Defaults to "Grey".
   */
  color?: ColorLiteral;
};

type AddNotebookTabParameters = CommonNotebookTabParameters & {
  /**
   * Title for the new tab.
   */
  title: string;
};

type EditNotebookTabParameters = CommonNotebookTabParameters & {
  /**
   * Index number for the tab.
   */
  index: number;

  /**
   * Title for the new tab. Defaults to the current title of the tab begin edited.
   */
  title?: string;
};
