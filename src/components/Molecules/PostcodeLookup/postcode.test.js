import axios from 'axios';
import { fetchPostcode } from "./postcode.js";

jest.mock("axios");

const postCodeData = [{"address_id":30577271,"Line1":"41A CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674880,"Line1":"41 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674881,"Line1":"43 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674882,"Line1":"45 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":25916970,"Line1":"47 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674883,"Line1":"49 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674884,"Line1":"51 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674885,"Line1":"53 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674886,"Line1":"55 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674887,"Line1":"57 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674888,"Line1":"59 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674889,"Line1":"61 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674890,"Line1":"63 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674891,"Line1":"65 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674892,"Line1":"FLAT 1","Line2":"67 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":36965812,"Line1":"FLAT 2","Line2":"67 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674893,"Line1":"69 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674894,"Line1":"71 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674895,"Line1":"73 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674896,"Line1":"75 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674897,"Line1":"77 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674898,"Line1":"79 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674899,"Line1":"81 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674900,"Line1":"83 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674901,"Line1":"85 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"},{"address_id":6674902,"Line1":"87 CARLYLE ROAD","posttown":"BRISTOL","postcode":"BS5 6HQ"}];


test("mock axios get function", async () => {
    expect.assertions(1);
    const payload = { data: postCodeData };
    // Now mock axios get method
    axios.get = jest.fn().mockResolvedValue(payload);
    await expect(fetchPostcode()).resolves.toEqual(postCodeData);
  });

