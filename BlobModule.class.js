/**
  * A collection of function related with blob(Binary Large OBject).
  * @version 1.0
  * @since 1.0
  * @author jiyu ( https://github.com/jiyu3 )
  */
class BlobModule {
    /**
     * Create Blob Object from string.
     * @param  string content / download file's content
     * @param  object mine / mine type like {"type": "text/plain"}, see: https://t.co/Z7y0pO62nQ
     * @return string / blob url like: blob:http://example.com/97ee1f1f-b021-48fa-93c5-4dae85
     */
    createBlobURL(content, mine = {"type": "text/plain"}) {
        return window.URL.createObjectURL(new Blob([content], mine));
    }

    /**
     * Download data located in blob url.
     * @param string blob_url / blob url
     * @param string filename / download filename
     */
    downloadBlobURL(blob_url, filename = "download") {
        let a = document.createElement("a");
        a.href = blob_url;
        a.download = filename;
        a.click();
    }

    /**
     * Download text content as file.
     * @param string content / download file's content
     * @param object mine / mine type like {"type": "text/plain"}, see: https://t.co/Z7y0pO62nQ
     * @param string filename / download filename
     */
    download(content, mine = {"type": "text/plain"}, filename = "download") {
        this.downloadBlobURL(this.createBlobURL(content, mine), filename);
    }
}