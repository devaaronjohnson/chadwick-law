<script>
	import { Form } from '$components';
	import { animateScroll } from 'svelte-scrollto-element';

	// Variables
	let services = ['LLC'];

	// Booleans
	let showDetails = false;

	// Meta
	let pageTitle = '';
	let pageDescription = '';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<section class="relative bg-brandDarkBlue pt-32 lg:pt-16 pb-0">
	<img src="/ccl_name.svg" alt="" class="bg_name" />
	<div class="relative container_xl container_padding flex flex-col lg:flex-row items-center">
		<div class="relative w-full lg:w-1/2">
			<h1 class="font-oregon font-medium text-white text-5xl lg:text-6xl mb-3 lg:mb-6">
				Protect your business and your sanity with a partnership agreement
			</h1>
			<p class="font-montserrat font-normal text-xl text-white mb-6">
				Starting a partnership with someone is risky without a comprehensive partnership agreement
				spelling out what's expected of the partners and how you'll run the business. See what's
				included in a partnership agreement and how to create one.
			</p>
			<!-- <p class="font-montserrat font-normal text-black text-xl mb-3">
				Legal services do not need to be complicated or expensive. Let me help walk you through your
				legal needs in a timely manner at a reasonable fee.
			</p> -->
			<!-- <div class="flex justify-start lg:justify-start items-center">
				<a
					href="."
					class="btn_hero border border-brandOrange bg-brandOrange text-white hover:bg-brandOrange hover:text-white"
					>Get Started</a
				>
			</div> -->
			<p class="font-montserrat font-normal text-xl text-white">
				Fill out the form to get started!
			</p>
		</div>
		<div id="form" class="relative w-full lg:flex-1 pl-0 lg:pl-28">
			<div class="translate-y-20"><Form {services} /></div>
		</div>
	</div>
</section>

<section class="pt-40 lg:pt-32 pb-12 lg:pb-28">
	<div class="container_xl container_padding">
		<div>
			<div class="w-full lg:w-3/4">
				<h2 class="font-oregon font-medium text-4xl text-black">
					Content of a partnership agreement
				</h2>
				<p class="font-montserrat font-normal text-base text-black mb-5">
					While there are partnership templates available, knowing what to write is where online
					resources and attorneys can help. For example, you can't have anything illegal in your
					agreement, such as an agreement for a medical practice when you're not doctors.
				</p>
			</div>
		</div>
		<div>
			<p class="font-montserrat font-normal text-base text-black mb-5">
				Partnership agreements shoudl contain at least the following:
			</p>
			<ol class="list-decimal pl-5 mb-5">
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">The partnership's name.</span> Pick a name that will help your business
					be found on the internet. Some online companies can help you get on the first page of search
					engines. They also check your business name to see if it's taken in your state, although your
					attorney can do that, too.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">Each partner's contribution to the partnership.</span> State what each
					partner is contributing, and that the contribution percentage equals the percentage of ownership
					in the partnership. If you want to have equal partners, you may want everyone to contribute
					the same amount. Clearly describe what percentage of ownership you all have. Refer to a loan
					if you'll be getting one.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">Each partner's duties.</span> One partner will be better suited for
					bookkeeping, while another can work with vendors and the public. Divide the duties, such as
					who is a managing partner, general, or limited partner. Name someone to oversee your marketing
					efforts unless you're hiring a marketing company.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">Your principal place of business.</span> List the address and any plans
					for possible growth. If you decide to add another building or to move, specify how you'll agree
					to that, such as by a unanimous vote.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">How long the partnership will exist.</span> You can limit the amount
					of time your business will be open. Include how you'll determine whether to get a partnership
					agreement extension.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">The partnership's purpose.</span> Explain the type of business and
					what your goals are.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">How you make decisions.</span> List what happens if you have a tied
					vote and whether someone acts as a tiebreaker. Specify who makes major and minor decisions,
					and explain what they are. For example, daily operations could be considered minor decisions.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">Distribution of profits.</span> Specify if partners are taking a draw
					or salary, how often, what to keep in the bank, which bank to use, and how distribution works.
					An accountant or attorney can advise you on the best practices for paying yourselves.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">How to handle debts.</span> Include this in detail, so there's no guessing
					later.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">How to amend the agreement.</span> Put procedures in place for possible
					amendments.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">How to add or remove partners.</span> List the procedures necessary
					for adding or getting rid of partners.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">Each partner's rights and liabilities.</span> Partners are personally
					liable for debts if the business is not an LLC or corporation, so discuss this with your attorney
					if you're not sure whether a general partnership or an LLC structure would be best.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">Time off.</span> Specify this, so there are no disagreements. State
					which days partners will work and when partners can take time off. List your business hours.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">How much insurance to get, what kind, and where to get it.</span> This
					is an important but sometimes overlooked issue. Include liability, theft, and fire protection.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">How and when to hire vendors and employees.</span> Have this agreed
					upon at the outset.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">How to buy out other partners.</span> Specify what procedures you need
					to follow to buy out someone or terminate another partner without dissolving the business.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">Dissolution of partnership.</span> List how and when the partnership
					gets dissolved, such as upon a partner's retirement, death, or move. List procedures for dissolution
					so you don't need a separate dissolution agreement. Check with an attorney to see if your state's
					laws require something specific.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">What state law governs.</span> Usually it's the state where the business
					is principally located.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">Using arbitration or mediation for disputes.</span> Require amicable
					dispute resolution before a partner goes to court.
				</li>
				<li class="font-montserrat font-normal text-base text-black mb-2">
					<span class="font-bold">Additional clauses.</span> These include noncompete and nondisclosure
					clauses, and whether one partner's actions or contracts can bind the partnership or if all
					partners must participate.
				</li>
			</ol>
			<p class="font-montserrat font-normal text-base text-black mb-5">
				Not having a partnership agreement is a sure way to have constant disputes among the owners
				of your business. Having a detailed partnership agreement—before your open your doors or
				launch your website—is a great way to start your business and help ensure good future
				relations among the partners.
			</p>
		</div>

		<div class="flex justify-start lg:justify-start items-center mt-10">
			<a
				on:click|preventDefault={() =>
					animateScroll.scrollTo({ element: '#form', duration: 1000, offset: -50 })}
				href="."
				class="btn_hero border border-brandOrange bg-brandOrange text-white hover:bg-brandOrange hover:text-white"
				>Start my partnership</a
			>
		</div>
	</div>
</section>

<style>
	.bg_name {
		position: absolute;
		left: 0px;
		bottom: 0;
		opacity: 0.1;
		height: 200px;
	}
</style>
