/** @format */

const loginSuccessRes = {
	access_token:
		"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU5NjA2OTQzLCJqdGkiOiIxMzIxNTcxZDU0ZDI0ZjU0YjgxYTYzYTJiYTdkM2RjMCIsInVzZXJfaWQiOjEyODd9.9eAi3mEMjSCAWNUtxoeommoQOPnrBugXfUi8C01OwE0",
	refresh_token:
		"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1ODgyOTM0MywianRpIjoiMGZiMzZkZTJiZjFlNDM0NTgzZjQ2YTVlNTE2MmIzNzQiLCJ1c2VyX2lkIjoxMjg3fQ.Z8Xp0P3HRDqIMQdE-TcYlX8zQzGjPZ5xyAvUiet4Cu8",
	user: {
		public_id: "3d4a105f-eb33-44c2-966f-5e65a2b29ff9",
		email: "boma@boma.com",
		username: "boma7",
		display_name: "boma25",
		first_name: null,
		last_name: null,
		bio: "test from mobile sc",
		avatar:
			"https://res.cloudinary.com/zst/image/upload/f_auto/q_auto/v1655796348/users/avatars/3d4a105f-eb33-44c2-966f-5e65a2b29ff9.png",
		account_type: "CITIZEN",
		reviews_count: 21,
		eyemarked_count: 7,
		created: "2022-05-04T16:24:39.991808+01:00",
		state_of_residence: "AKWA-IBOM",
	},
}

const invalidCred = {
	non_field_errors: ["Unable to log in with provided credentials."],
	status_code: 400,
}

export { loginSuccessRes, invalidCred }
