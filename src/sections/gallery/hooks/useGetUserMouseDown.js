import * as React from "react";

export const useGetUserMouseDown = galleryRef => {
  const [selections, setSelected] = React.useState([]);

  const handleUserKeyPress = event => {
    if (galleryRef.current.contains(event.target)) {
      return;
    }
    setSelected([]);
  };

  const handleOnClick = id => {
    setSelected([id]);
  };

  React.useEffect(() => {
    window.addEventListener("mousedown", handleUserKeyPress, false);

    return () => {
      window.removeEventListener("mousedown", handleUserKeyPress, false);
    };
  }, [handleUserKeyPress]);

  return { selections, handleOnClick };
};
