import jwt from 'jsonwebtoken';
import jwtSession from '../src/application/session/jwt';
import assert from 'node:assert';
import { it, describe } from 'node:test';
import { config } from './mocks';

const context = { npm: { jwt }, config } as any;
const api = jwtSession(context);

describe('session: [jsonwebtoken]', () => {
  const data = { id: crypto.randomUUID(), email: 'john.doe@gmail.com' };

  it('encode access', async () => {
    const token = await api.access(data);
    assert.ok(typeof token === 'string');
  });

  it('decode', async () => {
    const token = await api.access(data);
    const decoded = (await api.decode(token)) as any;
    assert.strictEqual(decoded.data.data.id, data.id);
    assert.strictEqual(decoded.data.data.email, data.email);
    assert.strictEqual(decoded.data._type, 'access');
  });

  it('verify', async () => {
    const token = await api.access(data);
    const isValid = await api.verify(token);
    assert.ok(isValid);
  });
});
