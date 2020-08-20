import React from "react";
import { ButtonGroup, ButtonToolbar, Button } from "react-bootstrap";

export default function Pagination({ perPage, totalPage , paginate}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPage / perPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="pageNum">
        <ButtonToolbar aria-label="Toolbar with button groups">
      {pageNumber.map((num) => (
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button onClick={()=> paginate(num)}>{num}</Button>
          </ButtonGroup>
      ))}
        </ButtonToolbar>
    </div>
  );
}
