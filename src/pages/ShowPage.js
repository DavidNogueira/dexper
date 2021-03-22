import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getShow } from "../redux/actions/actions";
import parse from "html-react-parser";
import { isObjectEmpty } from "../utils/utils";
import { Link } from "react-router-dom";
import { SCButton } from "../components/SCButton";
import { SCCoverBackground } from "../components/SCCoverBackground";
import { SCContainer } from "../components/SCContainer";
import { SCLinksList } from "../components/SCLinksList";
import { SCCard } from "../components/SCCard";
import theme from "../theme/themeX";

//Group by
function groupBy(arr, key) {
  const episodes = arr?.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
  return episodes || [];
}

export default function ShowPage() {
  const dispatch = useDispatch();

  //State
  const [seasonsList, setSeasonsList] = React.useState(1);

  //Side effects
  React.useEffect(() => {
    dispatch(getShow());
  }, [dispatch]);

  const { show, loading, error } = useSelector(
    (state) => ({
      show: state.show.data,
      loading: state.show.loading,
      error: state.show.error,
    }),
    shallowEqual
  );

  const ListOfEpisodes = () =>
    show?.episodes
      .filter((a) => a.season === seasonsList)
      .map((a, i) => {
        return (
          <Link
            key={i}
            style={{ color: theme.textColor1, margin: "5px" }}
            to={`/shows/${show.id}/season/${a.season}/episode/${a.number}`}
          >
            {i + 1} {a.name}
          </Link>
        );
      });

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
      {!isObjectEmpty(show) && (
        <>
          <div>{show.name}</div>
          <div style={{ margin: "2" }}>{parse(show.summary)}</div>
          <div style={{ display: "inline" }}>
            {Object.keys(groupBy(show.episodes, "season")).map((a, i) => (
              <SCButton onClick={() => setSeasonsList(i + 1)} key={i}>
                Season{a}
              </SCButton>
            ))}
          </div>
          <SCCard>
            <SCCoverBackground bgImage={show.image?.medium} alt="ppg" />
            <SCLinksList>
              <ListOfEpisodes />
            </SCLinksList>
          </SCCard>
        </>
      )}
    </SCContainer>
  );
}
