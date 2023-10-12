import axios from 'axios';
import { fetchPostcode } from "./postcode.js";

jest.mock("axios");

const albumData = {
  userId: 1,
  id: 2,
  title: "sunt qui excepturi placeat culpa",
};


test("mock axios get function", async () => {
    expect.assertions(1);
    const album = albumData;
    const payload = { data: album };
    // Now mock axios get method
    axios.get = jest.fn().mockResolvedValue(payload);
    await expect(fetchPostcode()).resolves.toEqual(album);
  });

