import * as core from '@actions/core'
import {diff} from 'json-diff'

async function run(): Promise<void> {
  try {
    const first: string = core.getInput('first')
    const second: string = core.getInput('second')
    core.debug('first:')
    core.debug(first)
    core.debug('second:')
    core.debug(second)

    core.debug(new Date().toTimeString())
    const df = diff(JSON.parse(first), JSON.parse(second))
    core.debug(new Date().toTimeString())

    core.setOutput('diff', df)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
