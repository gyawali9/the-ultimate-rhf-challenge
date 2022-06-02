import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Permanent Marker",
    textAlign: "center",
    fontSize: "40px",
    color: "darkblack",
    textShadoow: "1px 1px darkmaganta",
  },
}));

const Header = () => {
  const styles = useStyles();
  return (
    <Typography className={styles.root} component="h1">
      The Ultimate Form Challenge
    </Typography>
  );
};

export default Header;
