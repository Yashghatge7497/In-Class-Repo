<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';


    const message = ref( 'Hello Vue!' );
    const currentTab = ref( 'All' );
    const prompt = ref( 'Waiting for input...' );
    const notifications = reactive( [
        { type: 'primary', message: 'This is a primary notification' },
        { type: 'link', message: 'This is a link notification' },
        { type: 'success', message: 'Yay you did it!' },
        { type: 'warning', message: 'Uh Oh! Watch out!' },
        { type: 'danger', message: 'I cant believe you just did that!' },
    ] );


    function cardClick() {
        message.value = 'You clicked the card!';
    }
    function close(index: number) {
        notifications.splice(index, 1);
    }
                
    onMounted(() => {
        setInterval(() => {
            prompt.value += '.';
        }, 500);
    });


</script>

<template>
      <div class="section">
		<div class="container">
			<div class="columns">
				<div class="column is-one-quarter">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title"> Component </p>
							<button class="card-header-icon" aria-label="more options"> <span class="icon">
                              <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span> </button>
						</header>
						<div class="card-content">
							<div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
								<br>
								<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
							</div>
						</div>
						<footer class="card-footer"> <a href="#" class="card-footer-item">Save</a> <a href="#" class="card-footer-item">Edit</a> <a href="#" class="card-footer-item">Delete</a> </footer>
					</div>
				</div>
				<div class="column is-half">
					<article class="panel">
						<div class="tabs is-boxed">
							<ul>
								<li class="is-active">
									<a> <span class="icon is-small"><i class="fas fa-clipboard-list"></i></span> <span>Current</span> </a>
								</li>
								<li>
									<a> <span class="icon is-small"><i class="fas fa-calendar-times"></i></span> <span>Completed</span> </a>
								</li>
								<li>
									<a> <span class="icon is-small"><i class="fas fa-calendar-day"></i></span> <span>Upcoming</span> </a>
								</li>
								<li>
									<a> <span class="icon is-small"><i class="fas fa-calendar"></i></span> <span>All</span> </a>
								</li>
							</ul>
						</div>
						<div class="panel-block">
							<p class="control has-icons-left">
								<input class="input is-primary" type="text" placeholder="New Task"> <span class="icon is-left">
                  <i class="fas fa-calendar-plus" aria-hidden="true"></i>
                </span> </p>
						</div>
						<a class="panel-block">
							<input type="checkbox" checked /> <span>Make Bulma great again</span> </a>
						<a class="panel-block">
							<input type="checkbox" /> <span>Add some more features</span> </a>
						<a class="panel-block">
							<input type="checkbox" /> <span>Make a github account</span> </a>
						<a class="panel-block">
							<input type="checkbox" />
							<Span> Learn how to use github</Span> </a>
						<a class="panel-block">
							<input type="checkbox" /> <span>add a .gitignore file</span> </a>
					</article>
				</div>
				<div class="column is-one-quarter">
					<h2 class="title">Table of contents</h2>
					<h3 class="subtitle">Intra-page navigation</h3>
					<aside class="menu">
						<p class="menu-label"> General </p>
						<ul class="menu-list">
							<li><a>Dashboard</a></li>
							<li><a>Customers</a></li>
						</ul>
						<p class="menu-label"> Administration </p>
						<ul class="menu-list">
							<li><a>Team Settings</a></li>
							<li> <a class="is-active">Manage Your Team</a>
								<ul>
									<li><a>Members</a></li>
									<li><a>Plugins</a></li>
									<li><a>Add a member</a></li>
								</ul>
							</li>
							<li><a>Invitations</a></li>
							<li><a>Cloud Storage Environment Settings</a></li>
							<li><a>Authentication</a></li>
						</ul>
						<p class="menu-label"> Transactions </p>
						<ul class="menu-list">
							<li><a>Payments</a></li>
							<li><a>Transfers</a></li>
							<li><a>Balance</a></li>
						</ul>
					</aside>
				</div>
			</div>
		</div>          
      </div>
</template>

<style>
        .card .delete {
            position: absolute;
            right: 0.5rem;
            top: 0.5rem;
        }

</style>