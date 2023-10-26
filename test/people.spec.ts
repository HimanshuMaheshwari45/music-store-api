import Sinon from "sinon";

import { getPeople } from "../server/controller/people";
import { PeopleModel } from "../server/schema/people";
import { APIResponse, APIError } from "../server/utils/api";
import { expect } from "chai";

describe("People Controller", () => {
  afterEach(() => {
    Sinon.restore();
  });

  it("should load data using getPeople()", async () => {
    const fakeUsers = [
      {
        id: 1,
        username: "abc",
      },
      {
        id: 2,
        username: "def",
      },
    ];

    Sinon.stub(PeopleModel, "find").resolves(fakeUsers);

    const apiResponseStub = Sinon.stub();

    Sinon.stub(APIResponse.prototype, "json").value(apiResponseStub);

    const req = {};
    const res = {};

    await getPeople(req, res);

    expect(apiResponseStub.calledOnce).to.be.true;
    // expect(
    //   apiResponseStub.calledWith(
    //     res,
    //     fakeUsers,
    //     "This is the data for all users"
    //   )
    // ).to.be.true
  });
});
