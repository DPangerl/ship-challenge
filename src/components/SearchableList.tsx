import { alpha, Box, Grid, InputBase, List, Tab, Tabs } from "@mui/material";
import React, { ChangeEvent, ReactNode, useRef, useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { ShipListItem, ShipListItemProps } from "./ShipListItem";
import { ShipCard } from "./ShipCard";
import { Loader } from "./Loader";

export interface SearchableListProps {
  items: ShipListItemProps["ship"][];
  loading: boolean;
  fallback?: ReactNode;
  filterString?: string;
  onChangeFilterString?: (e: ChangeEvent) => void;
  onClickClearFilterString?: (e) => void;
}

const ListHeader = styled(Box)`
  position: sticky;
  top: 3.5rem;
  z-index: 5;
  padding: 1rem;
  background: ${(p) => p.theme.palette.background.paper};
`;
const Search = styled(Box)`
  border-radius: ${(p) => p.theme.shape.borderRadius}px;
  background-color: ${(p) => alpha(p.theme.palette.common.black, 0.1)};
  padding: 0 0.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
`;

export function SearchableList(props: SearchableListProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const inputRef = useRef(null);
  const { loading, items, filterString = "", onChangeFilterString, onClickClearFilterString } = props;

  function handleClickTab(_event, tabIndex) {
    setTabIndex(tabIndex);
  }

  function handleClick(e, shipUrl) {
    window.open(shipUrl, "_blank").focus();
  }

  return (
    <>
      <ListHeader>
        <Search>
          <InputBase
            ref={inputRef}
            placeholder="Filter by Type"
            fullWidth
            value={filterString}
            onChange={onChangeFilterString}
          />
          {filterString ? <BackspaceIcon onClick={onClickClearFilterString} /> : <SearchIcon />}
        </Search>
        <Tabs value={tabIndex} onChange={handleClickTab} variant="fullWidth">
          <Tab label="List View" />
          <Tab label="Gallery View" />
        </Tabs>
      </ListHeader>
      {loading && <Loader />}
      {!loading && (
        <Box px={2}>
          {tabIndex === 0 && (
            <List>
              {items.map((ship) => (
                <ShipListItem key={ship.id} ship={ship} onClick={handleClick} />
              ))}
            </List>
          )}
          {tabIndex === 1 && (
            <Grid container spacing={2}>
              {items.map((ship) => (
                <Grid xs={12} sm={6} md={3} item key={ship.id}>
                  <ShipCard ship={ship} onClickMore={handleClick} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      )}
    </>
  );
}
