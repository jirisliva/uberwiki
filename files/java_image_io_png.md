    // Get Image Writer
    Iterator<ImageWriter> writers = ImageIO.getImageWritersByFormatName("png");
    ImageWriter imageWriter = (ImageWriter) writers.next();

    // Define compression quality
    ImageWriteParam params = imageWriter.getDefaultWriteParam();

    params.setCompressionMode(javax.imageio.ImageWriteParam.MODE_EXPLICIT);
    params.setCompressionQuality(0.5F);
    params.setCompressionType(compressionType)

    // Define progressive mode
    params.setProgressiveMode(javax.imageio.ImageWriteParam.MODE_COPY_FROM_METADATA);
