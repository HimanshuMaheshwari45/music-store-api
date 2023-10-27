import Sinon from "sinon";

import { getPeople } from "../server/controller/people";
import { PeopleModel } from "../server/schema/people";
import { APIResponse, APIError } from "../server/utils/api";
import { expect } from "chai";
import chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../server/application";
import * as AuthMiddleware from "../server/middleware/auth";

chai.use(chaiHttp);

describe("People Controller", () => {
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

  let authStub;

  beforeEach(() => {
    authStub =  Sinon.stub(AuthMiddleware, "AuthLogin").callsFake((_req, _res, next: any) => {
      return next()
    });
  });

  afterEach(() => {
    authStub.restore();
    Sinon.restore();
  });

  it("should load data using getPeople()", async () => {
    Sinon.stub(PeopleModel, "find").resolves(fakeUsers);
    const apiResponseStub = Sinon.stub();
    Sinon.stub(APIResponse.prototype, "json").value(apiResponseStub);
    const req = {};
    const res = {};
    await getPeople(req, res);
    expect(apiResponseStub.calledOnce).to.be.true;
  });

  it("should load data using getPeople()", async () => {
    Sinon.stub(PeopleModel, "find").resolves(fakeUsers);
    const apiResponseStub = Sinon.stub();
    Sinon.stub(APIResponse.prototype, "json").value(apiResponseStub);
    const req = {};
    const res = {};
    await getPeople(req, res);
    expect(apiResponseStub.calledOnce).to.be.true;
  });

  // xit("should handle http request and return output", async () => {
  //   Sinon.stub(PeopleModel, "find").resolves(fakeUsers);

  //   const res = await chai
  //     .request(app)
  //     .get("/people")

  //   expect(res.status).to.equal(200);
  //   expect(res.body).to.deep.equal(fakeUsers);
  // });
});
