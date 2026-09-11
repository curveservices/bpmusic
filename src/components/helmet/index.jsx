import React, { useEffect } from "react";

const Helmet = ({ title, description, keywords, schemaMarkup }) => {
  useEffect(() => {
    if (title) document.title = title;

    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || "";

    if (keywords) {
      let metaKeywords = document.querySelector("meta[name='keywords']");
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.name = "keywords";
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }

    const ogTags = {
      "og:title": title,
      "og:description": description,
      "og:type": "website",
      "og:url": "https://www.pbmusic.org.uk/",
      "og:image": "https://www.pbmusic.org.uk/assets/images/events.jpg",
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property='${property}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    if (schemaMarkup) {
      const existingScript = document.querySelector(
        "script[type='application/ld+json']",
      );
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(schemaMarkup);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, schemaMarkup]);

  return null;
};

export default Helmet;
