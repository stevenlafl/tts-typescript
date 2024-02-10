interface MusicPlayer {}

/**
 * MusicPlayer is a static global class which allows you to control the in-game music playback i.e. the in-game "Music" menu.
 */
interface MusicPlayerConstructor {
  /**
   * If all players loaded the current audioclip. Read only.
   */
  loaded: boolean;

  /**
   * The current state of the music player. Read only.
   */
  player_status: 'Stop' | 'Play' | 'Loading' | 'Ready';

  /**
   * Current index of the playlist. -1 if no playlist audioclip is playing.
   *
   * @deprecated Use {@link playlist_index}.
   */
  playlistIndex: number;

  /**
   * Current index of the playlist. -1 if no playlist audioclip is playing.
   */
  playlist_index: number;

  /**
   * If the current audioclip should be repeated.
   */
  repeat_track: boolean;

  /**
   * If the playlist should play shuffled.
   */
  shuffle: boolean;

  /**
   * Gets the currently loaded audioclip.
   *
   * @returns {AudioClip} The currently loaded audioclip.
   */
  getCurrentAudioclip(this: void): AudioClip;

  /**
   * Gets the current playlist.
   *
   * @returns {AudioClip[]} Playlist table, consisting of zero or more audioclip sub-tables.
   */
  getPlaylist(this: void): AudioClip[];

  /**
   * Pauses currently playing audioclip. Returns true if the music player is paused, otherwise returns false.
   *
   * @returns {boolean} True if the music player is paused, otherwise returns false.
   */
  pause(this: void): boolean;

  /**
   * Plays currently loaded audioclip. Returns true if the music player is playing, otherwise returns false.
   *
   * @returns {boolean} True if the music player is playing, otherwise returns false.
   */
  play(this: void): boolean;

  /**
   * Sets the audioclip to be loaded.
   *
   * @param {AudioClip} parameters The audioclip to be loaded.
   * @returns {boolean} True if the audioclip was set, false otherwise.
   */
  setCurrentAudioclip(this: void, parameters: AudioClip): boolean;

  /**
   * Sets the current playlist
   *
   * @param {AudioClip[]} parameters Playlist table, consisting of zero or more audioclip sub-tables.
   * @returns {boolean} True if the playlist was set, false otherwise.
   */
  setPlaylist(this: void, parameters: AudioClip[]): boolean;

  /**
   * Skips to the beginning of the audioclip or if the play time is less than 3 seconds to the previous audioclip in playlist if possible. Returns true if skip was successful, otherwise returns false.
   *
   * @returns {boolean} True if skip was successful, otherwise returns false.
   */
  skipBack(this: void): boolean;

  /**
   * Skips to the next audioclip in playlist if possible. Returns true if skip was successful, otherwise returns false.
   *
   * @returns {boolean} True if skip was successful, otherwise returns false.
   */
  skipForward(this: void): boolean;
}

/**
 * MusicPlayer is a static global class which allows you to control the in-game music playback i.e. the in-game "Music" menu.
 */
declare var MusicPlayer: MusicPlayerConstructor;

/**
 * Table describing each audioclip.
 */
type AudioClip = {
  /**
   * The URL of the current audioclip.
   */
  url: string;

  /**
   * The title of the current audioclip.
   */
  title: string;
};
