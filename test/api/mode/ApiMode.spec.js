import { ApiMode } from '~/lib/api/mode/ApiMode'
import { ApiModesEnum } from '~/lib/api/mode/ApiModesEnum'

describe("ApiMode", () => {
  test("setToRemote works", () => {
    const newApiMode = new ApiMode(ApiModesEnum.LOCAL)
    newApiMode.setToRemote()
    expect(newApiMode.currApiMode).toBe(ApiModesEnum.REMOTE)
  })

  test("setToLocal works", () => {
    const newApiMode = new ApiMode(ApiModesEnum.REMOTE)
    newApiMode.setToLocal()
    expect(newApiMode.currApiMode).toBe(ApiModesEnum.LOCAL)
  })

  test("isLocal works", () => {
    expect(new ApiMode(ApiModesEnum.LOCAL).isLocal).toBe(true)
  })

  test("isRemote works", () => {
    expect(new ApiMode(ApiModesEnum.REMOTE).isRemote).toBe(true)
  })
})
