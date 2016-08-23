import add from 'app/utils/add';
import test from 'ava';

test('add() should add two numbers together', t => {
	t.is(add(2, 2), 4);
});
