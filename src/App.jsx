import './App.css'

function App() {
  //Data for separet Plans
  const data =[
    {
      plan:"free",
      price:0,
      user:"Single User",
    },
    {
      plan:"plus",
      price:9,
      user:"5 Users",
    },
    {
      plan:"pro",
      price:49,
      user:"Unlimited Users",
    },
  ];
  return (
    <div className='app'>
      {data.map((val,ind) =>
      <PriceCard
      key={ind}
      plan={val.plan}
      price={val.price}
      user={val.user}
      />
      )}
    </div>
  )
}

export default App

//Cards Create
function PriceCard(prop){
  return (
    <div className='card'>

      <div className='card-head'>
        <p className='plan-name'>{(prop.plan).toUpperCase()}</p>
        <h1>$
          <span className='amount'>{prop.price}</span>
          /month
          </h1>
      </div>

      <div className={`card-body ${prop.plan}`}>
        <ul className={`f-list ${prop.plan}`}>
          <li className='f-user'>
            {prop.user}
          </li>
          <li className='f-storage'>
            50GB Storage
          </li>
          <li className='f-project'>
            Unlimited Public Projects
          </li>
          <li className='f-community'>
            Community Access
          </li>
          <li className='f-privProj'>
            Unlimited Private Projects
          </li>
          <li className='f-support'>
            Dedicated Phone Support
          </li>
          <li className='f-domain'>
            Free Subdomain
          </li>
          <li className='f-report'>
            Monthly Status Reports
          </li>
        </ul>
      </div>

      <button className={`btn ${prop.plan}`}>Button</button>

    </div>
  );
}