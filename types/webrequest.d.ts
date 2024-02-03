interface WebRequest {
  /**
   * Download percentage, represented as a number in the range 0-1.
   *
   */
  download_progress: number;

  /**
   * Reason why the request failed to complete.
   *
   * If the server responds with a HTTP status code that represents a HTTP error (4xx/5xx), this is not considered a request error.
   */
  error: string;

  /**
   * If the request failed due to an error.
   */
  is_error: boolean;

  /**
   * If the request completed or failed. If the request failed, is_error will be set.
   */
  is_done: boolean;

  /**
   * Response HTTP status code.
   */
  response_code: number;

  /**
   * Response body.
   */
  text: string;

  /**
   * Upload percentage, represented as a number from 0-1.
   */
  upload_progress: number;

  /**
   * The request's target URL. If the request was redirected, this will still return the initial URL.
   */
  url: string;

  /**
   * Web requests are automatically disposed of after a request completes/fails.
   *
   * You may call this method to try abort a request and dispose of it early.
   *
   * @returns {boolean} True if the request was aborted and disposed of, false otherwise.
   */
  dispose(this: void): boolean;

  /**
   * Returns the value of the specified response header, or nil if no such header exists.
   *
   * @param {string} name The name of the header to retrieve.
   * @returns {string | null} The value of the specified response header, or nil if no such header exists.
   */
  getResponseHeader(this: void, name: string): string | null;

  /**
   * Returns the table of response headers. Keys and values are both strings.
   *
   * @returns {Record<string, string>} The table of response headers.
   */
  getRequestHeaders(this: void): Record<string, string>;
}

interface WebRequestConstructor {
  /**
   * Performs a HTTP request using the specified method, data and headers.
   *
   * @param {string} url The URL to request.
   * @param {string} method The HTTP method to use.
   * @param {boolean} download Whether you want to handle the response body. Must be true if you intend to read the response text.
   * @param {string} data The request body.
   * @param {Record<string, string>} headers Table of request headers. The table's keys and values must both be string.
   * @param {function} callback_function Called when the request completes (or fails).
   * @returns {WebRequest} The WebRequest object.
   */
  custom(
    this: void,
    url: string,
    method: string,
    download: boolean,
    data: string,
    headers: Record<string, string>,
    callback_function?: (this: void, request: WebRequest) => void
  ): WebRequest;

  /**
   * Performs a HTTP DELETE request.
   *
   * @param {string} url The URL to request.
   * @param {function} callback_function Called when the request completes (or fails).
   * @returns {WebRequest} The WebRequest object.
   */
  delete(
    this: void,
    url: string,
    callback_function?: (this: void, request: WebRequest) => void
  ): WebRequest;

  /**
   * Performs a HTTP GET request.
   *
   * @param {string} url The URL to request.
   * @param {function} callback_function Called when the request completes (or fails).
   * @returns {WebRequest} The WebRequest object.
   */
  get(
    this: void,
    url: string,
    callback_function?: (this: void, request: WebRequest) => void
  ): WebRequest;

  /**
   * Performs a HTTP HEAD request.
   *
   * @param {string} url The URL to request.
   * @param {function} callback_function Called when the request completes (or fails).
   * @returns {WebRequest} The WebRequest object.
   */
  head(
    this: void,
    url: string,
    callback_function?: (this: void, request: WebRequest) => void
  ): WebRequest;

  /**
   * Performs a HTTP POST request, sending the specified form.
   *
   * The form will be sent as the body of the request (Content-Type: application/x-www-form-urlencoded).
   *
   * @param {string} url The URL to request.
   * @param {Record<string, string> | string} form The form to post.
   * @param {function} callback_function Called when the request completes (or fails)
   * @returns {WebRequest} The WebRequest object.
   */
  post(
    this: void,
    url: string,
    form: Record<string, string> | string,
    callback_function?: (this: void, request: WebRequest) => void
  ): WebRequest;

  /**
   * Performs a HTTP PUT request, sending the specified data.
   *
   * The data will be UTF-8 encoded and sent as binary data in the body of the request (Content-Type: application/octet-stream).
   *
   * @param {string} url The URL to request.
   * @param {string} data The data to send.
   * @param {function} callback_function Called when the request completes (or fails).
   * @returns {WebRequest} The WebRequest object.
   */
  put(
    this: void,
    url: string,
    data: string,
    callback_function?: (this: void, request: WebRequest) => void
  ): WebRequest;
}

declare var WebRequest: WebRequestConstructor;
