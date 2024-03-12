import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async function (_, { rejectWithValue }) {
    try {
      const resp = await fetch('https://65c9d9ff3b05d29307df1b9e.mockapi.io/catalog');
      if (!resp.ok) {
        throw new Error('Server Error');
      }
      const data = await resp.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    curentCart: [],
    catalog: [],
    status: null,
    error: null,
    filters: [],
  },
  reducers: {
    setState(state, action) {
      state.catalog = action.payload;
    },
    setCurentCart(state, action) {
      state.curentCart = [...state.curentCart, action.payload];
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
    setFiltersIncr(state, action) {
      console.log(state.filters);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = 'resolve';
      state.catalog = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    });
  },
});

export const { setState, setCurentCart, setFilters, setFiltersIncr } = dataSlice.actions;

export default dataSlice.reducer;
