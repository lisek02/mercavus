import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { HobbiesTable } from "../components/HobbiesTable";
import { IHobby } from "../models/hobby";
import { getHobbies } from "../store/actions/hobbies.actions";
import { IState } from "../store/types";

interface IStateProps {
  hobbies: IHobby[];
}

interface IDispatchProps {
  getHobbiesAction: () => void;
}

class Hobbies extends React.Component<IStateProps & IDispatchProps> {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount() {
    this.props.getHobbiesAction();
  }

  public render() {
    return <HobbiesTable hobbies={this.props.hobbies} />;
  }
}

const mapStateToProps = (state: IState): IStateProps => ({
  hobbies: state.hobbies.list,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): IDispatchProps => bindActionCreators({
  getHobbiesAction: getHobbies,
}, dispatch);

export const HobbiesContainer = connect<IStateProps, IDispatchProps, {}>(
  mapStateToProps as any,
  mapDispatchToProps as any,
)(Hobbies);
