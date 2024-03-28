
import {render, screen} from '@testing-library/react';
import HotelCatalog from '@/components/HotelCatalog';
import getHotels from '@/libs/getHotels';
import { HotelJSON } from '../interface';
import { mockAllHotels, mockHotelQuery } from "../__test__/mockData"

// test API
describe('All Hotels', ()=>{
  var allHotelsJsonResult:HotelJSON
  beforeEach(async () => {
    allHotelsJsonResult = await getHotels()
  })
  
  it('should have correct number of hotels', async ()=>{
      expect(allHotelsJsonResult.count).toBe(9)
      expect(allHotelsJsonResult.data).toHaveLength(9)
  })
  it('should have correct Ids', async () => {
      const mockIds = mockAllHotels.data.map(hotel => hotel._id);
      const resultIds = allHotelsJsonResult.data.map(hotel => hotel._id);
      expect(resultIds).toEqual(expect.arrayContaining(mockIds));
  })
})

describe('Hotels Query', () => {
    var hotelQueryJsonResult:HotelJSON
    beforeEach(async () => {
        hotelQueryJsonResult = await getHotels({address: "Bangkok"})
    })

    it('should have correct number of hotels', async ()=>{
        expect(hotelQueryJsonResult.count).toBe(2)
        expect(hotelQueryJsonResult.data).toHaveLength(2)
    })
    it('should have correct Ids', async () => {
        const mockIds = mockHotelQuery.data.map(hotel => hotel._id);
        const resultIds = hotelQueryJsonResult.data.map(hotel => hotel._id);
        expect(resultIds).toEqual(expect.arrayContaining(mockIds));
    })
})

// test HotelCatalog
describe('HotelCatalog', () => {

    it('should render all hotels', async () => {
        const catalog = await HotelCatalog({hotelJson: mockAllHotels, date: "2022-12-12", duration: 3})
        render(catalog)
        const hotelElements = screen.getAllByRole('link');
        expect(hotelElements.length).toBe(9);
    })
})