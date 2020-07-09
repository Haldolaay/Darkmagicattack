import React from "react";
import "./home.css";
import Pagination from "@material-ui/lab/Pagination";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default class Result extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  componentWillReceiveProps() {
    console.log(this.props);
  }
  render() {
    return (
      <Grid container className={useStyles.root} spacing={10}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {this.props.cards.map((item) => (
              <div className="card">
                <img src={item.card_images[0].image_url_small} />
                <Link to={`/${item.id}`} className="link">
                  Details
                </Link>
              </div>
            ))}
          </Grid>
        </Grid>
        <Pagination
          count={this.props.cards.length}
          color="primary"
          renderItem={(item) => (
            <PaginationItem
              // component={Link}
              // to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...this.props.cards}
            />
          )}
        />
      </Grid>
    );
  }
}
