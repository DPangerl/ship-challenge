import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import shipPlaceholder from "../images/boat_placeholder.png";
import React from "react";

export interface ShipCardProps {
  ship: {
    name: string;
    type: string;
    image: string;
    url: string;
  };
  onClickMore: (e: React.MouseEvent, url: string) => void;
}

export function ShipCard({ ship, onClickMore }: ShipCardProps) {
  return (
    <Card>
      <CardMedia component="img" height="240" image={ship.image || shipPlaceholder} alt={ship.image} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {ship.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ship.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={(e) => onClickMore(e, ship.url)}>More Info</Button>
      </CardActions>
    </Card>
  );
}
