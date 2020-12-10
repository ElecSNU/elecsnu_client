export const uploadImage = async (
    imageBlob,
    fire_storage
) => {
    const imageUploaded = window.localStorage.getItem(
        'imageUploaded'
    );

    if (imageUploaded !== 'y') {
        fire_storage
            .ref('face_image')
            .put(imageBlob)
            .then(() => {
                window.localStorage.setItem(
                    'imageUploaded',
                    'y'
                );
            });
    }
};

export const b64toBlob = (b64Data, contentType) => {
    contentType = contentType || '';
    let sliceSize = 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (
        var offset = 0;
        offset < byteCharacters.length;
        offset += sliceSize
    ) {
        var slice = byteCharacters.slice(
            offset,
            offset + sliceSize
        );

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {
        type: contentType,
    });
    return blob;
};
