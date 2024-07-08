import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CoinList } from "./coin/CoinList";
import { CoinCreate } from "./coin/CoinCreate";
import { CoinEdit } from "./coin/CoinEdit";
import { CoinShow } from "./coin/CoinShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { MarketDataList } from "./marketData/MarketDataList";
import { MarketDataCreate } from "./marketData/MarketDataCreate";
import { MarketDataEdit } from "./marketData/MarketDataEdit";
import { MarketDataShow } from "./marketData/MarketDataShow";
import { AnalysisReportList } from "./analysisReport/AnalysisReportList";
import { AnalysisReportCreate } from "./analysisReport/AnalysisReportCreate";
import { AnalysisReportEdit } from "./analysisReport/AnalysisReportEdit";
import { AnalysisReportShow } from "./analysisReport/AnalysisReportShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Crypto demo"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Coin"
          list={CoinList}
          edit={CoinEdit}
          create={CoinCreate}
          show={CoinShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="MarketData"
          list={MarketDataList}
          edit={MarketDataEdit}
          create={MarketDataCreate}
          show={MarketDataShow}
        />
        <Resource
          name="AnalysisReport"
          list={AnalysisReportList}
          edit={AnalysisReportEdit}
          create={AnalysisReportCreate}
          show={AnalysisReportShow}
        />
      </Admin>
    </div>
  );
};

export default App;
