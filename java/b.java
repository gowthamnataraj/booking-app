import java.util.*;
public class b {
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int k=10;
        String s=String.valueOf(n);
        int l=s.length();
        int a[]=new int[l];
        int i=0;
        while(n>0)
        {
            int r=n%10;
            a[i]=r;
            n/=10;
            i++;
        }
        int kb=k;
        int b[]=new int[3];
        int j=0;
        for(i=l-1;i>=0;i--)
        {
            int temp=a[i];
            while(temp!=9)
            {
                if(kb==0)
                {
                    break;
                }
                else{
                    temp++;
                    kb--;
                }
            }
            b[j++]=temp;
        }
        int x=0;
        for(i=0;i<l;i++)
        {
            x=x*10+b[i];
        }
        System.out.println(x);
    }
}
