function tagMaker(tagName, attributes = {}, children = '') {
  const attrsToString = (attrs) => {
    const attrsArray = Object.entries(attrs);
    const attrsString = attrsArray.map(function (attr) {
      return attr[0] + '="' + attr[1] + '"';
    });
    return (attrsString = attrsToString(attributes));
  };
}
