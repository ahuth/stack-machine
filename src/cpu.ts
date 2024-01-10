type Condition = '+' | '-';

export type Instruction =
  | {op: 'push'; operand: number; cond?: Condition}
  | {op: 'drop'; cond?: Condition}
  | {op: 'eq'; cond?: Condition}
  | {op: 'ne'; cond?: Condition}
  | {op: 'gt'; cond?: Condition}
  | {op: 'ge'; cond?: Condition}
  | {op: 'lt'; cond?: Condition}
  | {op: 'le'; cond?: Condition}
  | {op: 'add'; cond?: Condition}
  | {op: 'sub'; cond?: Condition};

export function parse(code: string): Instruction[] {
  const lines = code.split('\n');
  const output: Instruction[] = [];

  for (const line of lines) {
    const trimmed = line.replace('#.+$', '').trim();

    if (!trimmed) continue;

    if (trimmed.startsWith('push')) {
      const matches = trimmed.match(/push (\d+)/);

      if (!matches) {
        throw new Error('Missing operand');
      }

      const operand = Number(matches[1]);
      output.push({op: 'push', operand});
    } else if (trimmed === 'add') {
      output.push({op: 'add'});
    }
  }

  return output;
}

export function execute(instruction: Instruction, stack: number[]): number[] {
  switch (instruction.op) {
    case 'push':
      return [instruction.operand, ...stack];
    case 'add': {
      const [a, b, ...rest] = stack;
      return [a + b, ...rest];
    }
    default:
      return stack;
  }
}
