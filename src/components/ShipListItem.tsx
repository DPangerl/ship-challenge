import { Avatar, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import shipPlaceholder from "../images/boat_placeholder_small.png";
import React from "react";

export interface ShipListItemProps {
  ship: {
    id: string;
    name: string;
    type: string;
    image: string;
    url: string;
  };
  onClick: (e: React.MouseEvent, url: string) => void;
}

export function ShipListItem({ ship, onClick }: ShipListItemProps) {
  return (
    <ListItemButton onClick={(e) => onClick(e, ship.url)} divider>
      <ListItemAvatar>
        <Avatar variant="rounded" src={ship.image || shipPlaceholder} />
      </ListItemAvatar>
      <ListItemText primary={ship.name} secondary={ship.type} />
    </ListItemButton>
  );
}
