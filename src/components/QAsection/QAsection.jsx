import React from "react";

const QAsection = () => {
  return (
    <div className="bg-gray-200 py-10">
      <h2 className="text-5xl text-center pb-10">QA Section</h2>
      <div className="bg-white w-5/6 mx-auto px-10 py-5 rounded-lg mb-8">
        <h3 className="text-2xl mb-3">Question - 1: Difference between props and state? </h3>
        <p className="w-11/12 lg:ml-5">
          In a simple word, state is a way to store data and change the data upon user activity or
          device event response. It is usually managed within component. <br />
          On the flip side, props is usually used to transfer data from one component to another.
          You can transfer any kind of data including object, array, function, even a component. But
          the data transfer process in unidirectional.
        </p>
      </div>
      <div className="bg-white w-5/6 mx-auto px-10 py-5 rounded-lg mb-8">
        <h3 className="text-2xl mb-3">Question - 2: How useState works? </h3>
        <p className="w-11/12 lg:ml-5">
          useState acts like a sensor or watchman. It stores data of a component and is waited to
          response if there were any changes of that data. It receives the changed data and update
          the existing data within new one. And the UI changed according to the changed data.
        </p>
      </div>
      <div className="bg-white w-5/6 mx-auto px-10 py-5 rounded-lg mb-8">
        <h3 className="text-2xl mb-3">
          Question - 3: Purpose of useEffect other than fetching data?
        </h3>
        <p className="w-11/12 lg:ml-5">
          UseEffect also used to get data from localStorage to perform operation on the basis of
          localStorage data. It also starts a new operation if there any changes on its dependency
          data.
        </p>
      </div>
      <div className="bg-white w-5/6 mx-auto px-10 py-5 rounded-lg mb-8">
        <h3 className="text-2xl mb-3">Question - 4: How React works?</h3>
        <p className="w-11/12 lg:ml-5">
          React is a JavaScript library. It works on component basis. It divides the UI into
          different reusable or stand-alone component and use them when required. It makes the
          maintenance of a site much easier rather than a site built with vanilla JavaScript.
        </p>
      </div>
    </div>
  );
};

export default QAsection;
