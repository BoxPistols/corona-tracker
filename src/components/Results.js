export const Results = (props) => {
  console.log("Result", props)
  return (
    <div className="Results">
      <h1>Results</h1>
      <dl>
        <dt>日付：</dt>
        <dd>{props.countryData.dateGet.slice(0, 10)}</dd>
        <dt>新規感染者：</dt>
        <dd>{props.countryData.newConfirmed.toLocaleString()}</dd>
        <dt>感染者総数：</dt>
        <dd>{props.countryData.totalConfirmed.toLocaleString()}</dd>
        <dt>新規回復者：</dt>
        <dd>{props.countryData.newRecoverd.toLocaleString()}</dd>
        <dt>回復者総数：</dt>
        <dd>{props.countryData.totalRecoverd.toLocaleString()}</dd>
        <dt>新規死者：</dt>
        <dd>{props.countryData.newDeaths.toLocaleString()}</dd>
        <dt>死者総数：</dt>
        <dd>{props.countryData.totalDeaths.toLocaleString()}</dd>
      </dl>
      <p>*一部正確でない数値もあります</p>
    </div>
  )
}
