import React, { Component } from "react";
import GroupList from "../components/GroupList";
import { getGroupsAsync } from "../actions";
import { connect } from "react-redux";

class GroupsPage extends Component {
  componentDidMount() {
    const { groups, getGroups } = this.props;
    if (groups.length === 0) {
      getGroups();
    }
  }

  render() {
    const { groups } = this.props;
    return <GroupList groups={groups} />;
  }
}

const mapStateToProps = (state, props) => ({
  groups: state.groups
});

const mapDispatchToProps = dispatch => ({
  getGroups: () => dispatch(getGroupsAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupsPage);
