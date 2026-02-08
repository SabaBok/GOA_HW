#5) შექმენი კლასი Subscription: რომელსაც ექნება user_name, plan("free", "basic", "pro"), months_active. 
# წესები: free -> max 1 month, basic -> max 6 months, pro -> unlimited. დაბეჭდე რომელ მომხმარებლებს აქვთ ვალიდური subscription. 
# ლოგიკა დაწერე class-ის გარეთ

class Subscription:
	def __init__(self,user_name,plan,months_active):
		self.user_name = user_name
		self.plan = plan
		self.months_active = months_active

sub1 = Subscription('saba','free',1)
sub2 = Subscription('gio','basic',7)
sub3 = Subscription('nika','pro',12)
subscription_list = [sub1,sub2,sub3]

for sub in subscription_list:
	if (sub.plan == 'free' and sub.months_active <= 1) or (sub.plan == 'basic' and sub.months_active <= 6) or (sub.plan == 'pro'):
		print(f'{sub.user_name} has a valid {sub.plan} subscription for {sub.months_active} month(s).')