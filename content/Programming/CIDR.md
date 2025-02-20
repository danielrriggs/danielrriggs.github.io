Example:
192.168.1.0/24 - same as 255.255.255.0

192.168.1 > host; 
1 > Host

**IPv4 = 32 bit address space.**
Take the /24, **subtract it from 32** & raise it.
32-24 = 8
2^8 = 256 (addresses on that subnet)
So, this represents a network whose address space goes from 192.168.1.1 to 192.168.1.254.
Why? The .0 is always the name of the network (specifying the **subnet**). The .255 is the **broadcast**. You can't assign either of those. Every time you divide a subnet, you can't use those addresses.


Another example:
192.168.1.128/25
32 - 25 = 7
2^7 = 128 (addresses on that subnet)
192.168.1.129 to 129.168.1.254
