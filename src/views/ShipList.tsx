import React, { useEffect, useState } from "react";

import { gql, useQuery } from "@apollo/client";
import { SearchableList } from "@components/SearchableList";
import { InView } from "react-intersection-observer";

const FETCH_SHIPS_GQL = gql`
  query fetch_ships($find: ShipsFind, $limit: Int, $offset: Int) {
    ships(find: $find, limit: $limit, offset: $offset) {
      id
      name
      type
      image
      active
      model
      url
    }
  }
`;

export default function TransactionListView() {
  const [searchString, setSearchString] = useState("");
  const queryVariables = { find: { type: searchString }, limit: 5, offset: 0 };
  const { data, loading, refetch, fetchMore } = useQuery(FETCH_SHIPS_GQL, { variables: queryVariables });
  function handleClickClearSearchString() {
    setSearchString("");
  }

  function handleChangeSearchString(e) {
    setSearchString(e.target.value);
  }

  useEffect(() => {
    refetch(queryVariables);
  }, [searchString]);

  function handleScrollMore() {
    fetchMore({ variables: { ...queryVariables, offset: data?.ships.length } });
  }

  return (
    <>
      <SearchableList
        loading={loading}
        filterString={searchString}
        onChangeFilterString={handleChangeSearchString}
        onClickClearFilterString={handleClickClearSearchString}
        items={data?.ships}
      />
      <InView onChange={(inView) => inView && handleScrollMore()} />
    </>
  );
}