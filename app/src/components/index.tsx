import {SerializedError} from "@reduxjs/toolkit";
import React, {useEffect, VFC} from "react";

interface Props {
  liffIdToken?: string;
  displayName?: string;
  pictureUrl?: string;
  error?: SerializedError;
  lineLogin: () => void;
  lineProfile: () => void;
}

export const Home: VFC<Props> = (props: Props) => {
  const {liffIdToken, displayName, pictureUrl, lineLogin, lineProfile, error} =
    props;
  useEffect(() => {
    // LINE Login
    if (!liffIdToken) {
      // liffIdToken がReduxに取得できていない場合LINE Login画面に戻る
      lineLogin();
    }
  }, [liffIdToken, lineLogin]);

  useEffect(() => {
    if (liffIdToken) {
      // LINE Profile情報を取得
      lineProfile();
    }
  }, [liffIdToken, lineProfile]);

  if (error) {
    return (
      <div>
        <p>ERROR!</p>
      </div>
    );
  } else
    return (
      <div className="App">
        <header className="App-header">
          <img src={pictureUrl} alt="line profile" width="80" height="80" />
          <p>HELLO, {displayName}</p>
        </header>
      </div>
    );
};