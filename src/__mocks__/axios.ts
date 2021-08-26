export default {
  get: jest.fn().mockResolvedValue({ data: 'Did it' }),
  post: jest.fn().mockResolvedValue('Success post'),
  put: jest.fn().mockResolvedValue('Success put'),
  delete: jest.fn().mockResolvedValue('Success delete'),
  patch: jest.fn().mockResolvedValue('Success patch'),
}
