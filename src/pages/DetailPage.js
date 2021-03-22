import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getEpisodeByNumber } from "../redux/actions/actions";
import { useHistory } from "react-router-dom";
import parse from "html-react-parser";
import { isObjectEmpty } from "../utils/utils";
import { SCContainer } from "../components/SCContainer";
import { SCButton } from "../components/SCButton";
import { SCCoverBackground } from "../components/SCCoverBackground";

export default function DetailPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const pricingPlanId1 = props.match.params.id1;
  const pricingPlanId2 = props.match.params.id2;
  const pricingPlanId3 = props.match.params.id3;

  //Side effects
  React.useEffect(() => {
    dispatch(
      getEpisodeByNumber({
        show: pricingPlanId1,
        season: pricingPlanId2,
        episode: pricingPlanId3,
      })
    );
  }, [pricingPlanId1, pricingPlanId2, pricingPlanId3, dispatch]);

  const { detail, loading, error } = useSelector(
    (state) => ({
      detail: state.details.data,
      loading: state.details.loading,
      error: state.details.error,
    }),
    shallowEqual
  );

  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  if (loading) {
    // Loading component
    return <div>LOADING...</div>;
  }
  if (!isObjectEmpty(error)) {
    // Error component for ex: a red snackBar
    return <div>ERROR {error}</div>;
  }
  return (
    <SCContainer>
      {!isObjectEmpty(detail) && (
        <>
          <SCButton onClick={back}>Go back</SCButton>
          <div>{detail.name}</div>
          <div>{detail.summary && parse(detail.summary)}</div>
          <div style={{display:"flex", justifyContent:'center'}}>
            <SCCoverBackground bgImage={detail.image?.medium} alt="ppg" />
          </div>
        </>
      )}
    </SCContainer>
  );
}
