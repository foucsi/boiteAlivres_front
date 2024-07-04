import { getAllBookPlaces } from '@/helpers/functions/getAllBookPlaces';
import fetch from 'jest-fetch-mock';
import { URL_GET_ALL_BOOK_PLACES } from '@/constants/Url';

jest.mock('@/utils/logger', () => ({
    log: {
        info: jest.fn(),
        error: jest.fn(),
    },
}));

describe('getAllBookPlaces', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('should return book places when the fetch is successful', async () => {
        fetch.mockResponseOnce(JSON.stringify({ result: true, bookPlaces: ['place1', 'place2'] }));

        const result = await getAllBookPlaces();

        expect(result).toEqual({ success: true, bookPlaces: ['place1', 'place2'] });
        expect(fetch).toHaveBeenCalledWith(URL_GET_ALL_BOOK_PLACES);
    });

    it('should handle HTTP errors', async () => {
        fetch.mockReject(new Error('HTTP error! status: 404 Not Found'));

        const result = await getAllBookPlaces();

        expect(result).toEqual({ success: false, error: expect.any(Error) });
    });

    it('should handle unsuccessful responses', async () => {
        fetch.mockResponseOnce(JSON.stringify({ result: false, error: 'Some error' }));

        const result = await getAllBookPlaces();

        expect(result).toEqual({ success: false, error: 'Some error' });
    });

    it('should handle other errors', async () => {
        fetch.mockReject(new Error('Network error'));

        const result = await getAllBookPlaces();

        expect(result).toEqual({ success: false, error: expect.any(Error) });
    });
});