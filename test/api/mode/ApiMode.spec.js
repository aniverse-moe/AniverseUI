// @ts-check

import { ApiModeManager } from '~/lib/api/mode/ApiModeManager'
import { ApiModesEnum } from '~/lib/api/mode/ApiModesEnum'

describe("ApiMode", () => {
  test("setToRemote works", () => {
    const apimode = new ApiModeManager(ApiModesEnum.LOCAL)
    expect(apimode.currApiMode).toBe(ApiModesEnum.LOCAL)
    apimode.setToRemote()
    expect(apimode.currApiMode).toBe(ApiModesEnum.REMOTE)
  })

  test("setToLocal works", () => {
    const apimode = new ApiModeManager(ApiModesEnum.REMOTE)
    expect(apimode.currApiMode).toBe(ApiModesEnum.REMOTE)
    apimode.setToLocal()
    expect(apimode.currApiMode).toBe(ApiModesEnum.LOCAL)
  })

  test("isLocal works", () => {
    expect(new ApiModeManager(ApiModesEnum.LOCAL).isLocal).toBe(true)
  })

  test("isRemote works", () => {
    expect(new ApiModeManager(ApiModesEnum.REMOTE).isRemote).toBe(true)
  })
})
