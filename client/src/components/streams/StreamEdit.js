import _ from "lodash";
import React, { useEffect } from "react";
import { fetchStream, editStream } from "../../actions";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";

const StreamEdit = props => {
  const streamId = props.match.params.id;
  const fetchStream = props.fetchStream;

  // Equivalent to componentDidMount if it was a class based component.
  useEffect(() => {
    fetchStream(streamId);
  }, [streamId, fetchStream]);

  const onSubmit = formValues => {
    props.editStream(props.match.params.id, formValues);
  };

  if (!props.stream) {
    return <div>Loading..</div>;
  } else {
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(props.stream, "title", "description")}
          onSubmit={onSubmit}
        ></StreamForm>
      </div>
    );
  }
};

// ownProps represent the props that the StreamEdit component would be called with.
// In this case, some props passed by the Router component that renders it.
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
