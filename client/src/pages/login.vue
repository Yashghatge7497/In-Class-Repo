<script>

	//

</script>

<template>
	<div id="loginContainer" class="tile is-ancestor">
		<div id="loginSideContent" class="content tile is-vertical is-6">
			<div class="container">
				<div id="imgContainer" class="container">
					<figure class="image">
						<img id="loginSideIll" class="is-square" src="../assets/svg/loginSideIllustration.svg" />
					</figure>
				</div>

				<h1 id="loginTitle">To Do App</h1>
				<p id="loginSubtitle">Organize your tasks and get stuff done!</p>
			</div>
		</div>

		<div class="tile is-vertical is-6">
			<div id="loginBox" class="box container vcenter">
				<h2 id="loginFormTitle">Login</h2>

				<div class="field">
					<label class="label">Username</label>
					<div class="control has-icons-left">
						<input class="input is-normal" type="text" placeholder="Username" />
						<span class="icon is-left">
							<img class="inputIcon" src="../assets/svg/user.svg" />
						</span>
					</div>
				</div>

				<div class="field">
					<label class="label">Password</label>
					<div class="control has-icons-left">
						<input class="input is-normal" type="password" placeholder="Password" />
						<span class="icon is-left">
							<img class="inputIcon" src="../assets/svg/password.svg" />
						</span>
					</div>
				</div>

				<button id="loginBtn" class="button is-success">Login</button>
			</div>
		</div>
	</div>
</template>

<style>
#loginBtn {
	margin: 10px 0 auto auto;
}

#loginFormTitle {
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;
	color: #1a1a1a;

	padding-bottom: 20px;
}

#loginBox {
	width: 70%;
	flex-grow: 0;
	padding: 40px;
}

#loginContainer {
	height: 100%;
}

#loginSideContent {
	width: 50%;
	height: 100%;
	background: #dadada;
}

#loginSideIll {
	width: 60%;
}

#imgContainer {
	padding-top: 20%;
}

#loginTitle {
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 600;
	font-size: 48px;
	line-height: 59px;
	color: #1a1a1a;
	text-align: center;

	padding-top: 5%;
}

#loginSubtitle {
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: #4e4e4e;
	text-align: center;
}
</style>