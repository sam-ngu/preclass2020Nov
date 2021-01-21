function injectCode(source, placeholder, replaceValue){
    return source.replace(
        placeholder,
        replaceValue
    );
}

module.exports = {
    injectCode,
    
}