export const Results = (props) => {
  console.log("Result", props)
  return (
    < div className="Results" >
      <h1>Results</h1>
      <dl>
        <dt>日付：</dt>
        <dd>{props.countryData.dateGet}</dd>
        <dt>新規感染者：</dt>
        <dd>{props.countryData.newConfirmed}</dd>
        <dt>感染者総数：</dt>
        <dd>{props.countryData.totalConfirmed}</dd>
        <dt>新規回復者：</dt>
        <dd>{props.countryData.newRecoverd}</dd>
        <dt>回復者総数：</dt>
        <dd>{props.countryData.totalRecoverd}</dd>
        <dt>新規死者：</dt>
        <dd>{props.countryData.newDeaths}</dd>
        <dt>死者総数：</dt>
        <dd>{props.countryData.totalDeaths}</dd>
      </dl>
      <p>*一部正確でない数値もあります</p>
    </div >
  );
};
