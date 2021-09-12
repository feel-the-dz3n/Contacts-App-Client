import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

type DeleteContactClickDelegate = () => void;

interface props {
  onClick: DeleteContactClickDelegate;
}

export default function DeleteContactButton(props: props) {
  const [promptShown, _setPromptShown] = useState(false);
  const timer = useRef<NodeJS.Timeout | undefined>();

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  const setPromptShown = (value: boolean) => {
    _setPromptShown(value);

    if (value) {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        _setPromptShown(false);
      }, 5000);
    }
  };

  if (promptShown) {
    return (
      <Button
        variant="danger"
        size="sm"
        style={{ minWidth: 58 }}
        onClick={() => props.onClick()}
      >
        Sure?
      </Button>
    );
  }

  return (
    <Button
      variant="outline-danger"
      size="sm"
      style={{ minWidth: 58 }}
      onClick={() => setPromptShown(true)}
    >
      Delete
    </Button>
  );
}
